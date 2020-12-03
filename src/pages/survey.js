import React, { useState, useEffect } from "react";

const Survey = () => {
  const [form, setForm] = useState({
    Nome: "",
    Email: "",
    Whatsapp: "",
    Nota: "",
    Comentario: "",
  });

  const save = async () => {
    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.name;

    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const notas = [0, 1, 2, 3, 4, 5];
  return (
    <div className="pt-6">
      <p className="text-center font-bold my-4 text-2xl">
        Críticas e Sugestões
      </p>
      <p className="text-center my-6">
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      <div className="mt-4 w-1/5 mx-auto">
        <label>Seu nome:</label>
        <input
          type="text"
          name="Nome"
          onChange={onChange}
          className="p-4 block shadow-lg bg-blue-100 m-2 rounded-sm"
        />
        <label>E-mail:</label>
        <input
          type="text"
          name="Email"
          onChange={onChange}
          className="p-4 block shadow-lg bg-blue-100 m-2 rounded-sm"
        />
        <label>Whatsapp:</label>
        <input
          type="text"
          name="Whatsapp"
          onChange={onChange}
          className="p-4 block shadow-lg bg-blue-100 m-2 rounded-sm"
        />
        <p>Notas:</p>
        <div className="flex py-6">
          {notas.map((nota) => {
            return (
              <label className="block w-1/6 text center p-4">
                {nota}
                <br />
                <input
                  type="radio"
                  name="Nota"
                  value={nota}
                  onChange={onChange}
                />
              </label>
            );
          })}
        </div>
        <label>Comentário:</label>
        <input
          type="text"
          name="Comentario"
          onChange={onChange}
          className="p-4 block shadow-lg bg-blue-100 m-2 rounded-sm"
        />

        <pre>{JSON.stringify(form, null, 2)}</pre>

        <button
          onClick={save}
          className="bg-blue-400 px-6 py-4 font-bold text-white rounded-lg shadow-lg hover:shadow"
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Survey;
