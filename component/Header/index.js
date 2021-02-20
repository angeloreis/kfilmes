import React from 'react'
import Link from 'next/link'

export default function Header() {
    return(
        <header id={'main-menu'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-3'}>
                        <Link href='/'><a className={'fontStyle'}><img className={'ImageLogo'} src='/logo.png' />Filmes</a></Link>
                    </div>
                    <div className={'col-sm-7'}>
                        <nav>
                            <ul className={'list-inline'}>
                                <li className={'list-inline-item'}><Link href='/'><a>Home</a></Link></li>
                                <li className={'list-inline-item'}>
                                <Link href='#depoimentos'><a>Depoimentos</a></Link>
                                </li>
                                <li className={'list-inline-item'}><Link href='#quem_somos'><a>Quem somos</a></Link></li>
                                <li className={'list-inline-item'}><Link href='#portfolio'><a>Portfólio</a></Link></li>
                                <li className={'list-inline-item'}><Link href='#contatos'><a>Contato</a></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className={'col-sm-2'}>
                        <Link href='#'>
                            <a className={'btn btn-info fontStyle'} role='button'>E-mail</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
