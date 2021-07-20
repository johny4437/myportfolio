import React from 'react'

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contato</h1>
                <p>Por favor preencha o formulário e descreva as necessidades do seu projeto, que entraremos em Contato
                    o mais rápido possivel.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                            <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Nome..."
                            name="name"
                            />
                            <div className="line"></div>
                        </div>
                        
                        {/* PHONE INPUT */}
                        <div className="text-center">
                            <input
                            id="phone"
                            type="text"
                            className="form-control"
                            placeholder="Telefone..."
                            phone="phone"
                            />
                            <div className="line"></div>
                        </div>
                        
                        {/* EMAIL INPUT */}
                        <div className="text-center">
                            <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email..."
                            email="email"
                            />
                            <div className="line"></div>
                        </div>
                        
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                            <input
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Assunto..."
                            subject="subject"
                            />
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION INPUT */}
                        <div className="text-center">
                            <textarea
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Descrição..."
                            description="description"
                            ></textarea>
                            <div className="line"></div>
                        </div>
                        
                        <button className="btn-main-offer contact-btn" type="submit">
                            Enviar
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
