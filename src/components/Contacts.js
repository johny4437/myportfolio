import React from 'react';
import emailjs from 'emailjs-com';
import { useForm } from "react-hook-form";

const Contacts = () => {

    const [successMessage, setSuccessMessage] = React.useState("");

    const service_ID = "service_ID";
    const user_ID = "user_6ibdvBCSA0rnsWzkHr4WV";
    const template_ID = "template_e8w01fw"
    const {register, handleSubmit, watch, formState: { errors }  } = useForm();

    const onSubmit = (data, r) =>{
        sendEmail(
            service_ID,
            template_ID,
            {
                name:data.name,
                phone:data.phone,
                email:data.email,
                subject:data.subject,
                description:data.description
            },
            user_ID
        )
        r.target.reset();
    }

    function sendEmail(service_ID, template_ID, variables, user_ID) {
        
    
            emailjs.send(service_ID, template_ID, variables, user_ID)
            .then((result) => {
                setSuccessMessage("Contato realizado com sucesso!")
            }).catch(err=>{
                console.error(`Algo deu errado ${err}`)
            });
        }
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contato</h1>
                <p>Por favor preencha o formulário e descreva as necessidades do seu projeto, que entraremos em Contato
                    o mais rápido possivel.
                </p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>

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
                                {...register("name", { required: true })}
                                />
                                
                                <div className="line"></div>
                                {errors.name && <span>Nome é obrigatório</span>}
                            </div>
                            
                            {/* PHONE INPUT */}
                            <div className="text-center">
                                <input
                                id="phone"
                                type="text"
                                className="form-control"
                                placeholder="Telefone..."
                                name="phone"
                                {...register("phone", { required: true })}
                                />
                                <div className="line"></div>
                                {errors.phone && <span>Telefone é obrigatório</span>}
                            </div>
                            
                            {/* EMAIL INPUT */}
                            <div className="text-center">
                                <input
                                id="email"
                                type="email"
                                className="form-control"
                                placeholder="Email..."
                                name="email"
                                {...register("email", { required: true })}
                                />
                                <div className="line"></div>
                                {errors.email && <span>Email é obrigatório</span>}
                            </div>
                            
                            {/* SUBJECT INPUT */}
                            <div className="text-center">
                                <input
                                id="subject"
                                type="text"
                                className="form-control"
                                placeholder="Assunto..."
                                name="subject"
                                {...register("subject", { required: true })}
                                />
                                <div className="line"></div>
                                {errors.subject && <span>Assunto é obrigatório</span>}
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
                                name="description"
                                {...register("description", { required: true })}
                                ></textarea>
                                <div className="line"></div>
                                {errors.description && <span>Descrição é obrigatório</span>}
                            </div>
                            
                            <button className="btn-main-offer contact-btn" type="submit">
                                Enviar
                            </button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
