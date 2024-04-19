'use client'
import { useState } from 'react';

/* Importação do CSS*/
import './style.css'

/* Importação das imagens */
import imagem from './assets/imagem1.png'

/* Importa a função para adicionar dados de cliente no meu arquivo json */
import { addClientData } from './clientDataHandler';

interface FormData {
    name: string;
    emailOrPhone: string;
    rating: string;
    opinion: string;
}

interface Props {
    onSubmit: (formData: FormData) => void; // Tipo explícito para a prop onSubmit
}

export default function FeedbackForm({ onSubmit }: Props) {
    const [rating, setRating] = useState('');
    const [opinion, setOpinion] = useState('');
    const [name, setName] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');

    const handleRatingChange = (event:any) => {
        setRating(event.target.value);
    };

    const handleOpinionChange = (event:any) => {
        setOpinion(event.target.value);
    };

    const handleNameChange = (event:any) => {
        setName(event.target.value);
    };

    const handleEmailOrPhoneChange = (event:any) => {
        setEmailOrPhone(event.target.value);
    };

    const handleFeedbackFormSubmit = (event:any) => {
        event.preventDefault();

        const formData = {
            name: name,
            emailOrPhone: emailOrPhone,
            rating: rating,
            opinion: opinion
        };

        // Enviar dados para a função onSubmit passada como prop
        onSubmit(formData);

        // Limpar o formulário após o envio
        setRating('');
        setOpinion('');
        setName('');
        setEmailOrPhone('');
    };

    return (

        <div className='container-form-pesquisa'>

            <div className='box-mensagens-sobre-pesquisa'>

                <div className='box-form-info-pesquisa'>
                    <h1 className='titulo-pagina-pesquisa-satisfacao'>Ajude-nos a melhorar! Sua opinião é fundamental! </h1>

                    <p className='descritivo-pagina-pesquisa-satisfacao'>Queremos proporcionar a melhor experiência possível para você, nosso cliente valorizado. Sua opinião é crucial para entendermos o que estamos fazendo bem e onde podemos melhorar. Nosso objetivo é atender às suas necessidades de forma excepcional, e você pode nos ajudar a alcançar isso respondendo a nossa rápida pesquisa de satisfação.</p>

                    <p className='descritivo-pagina-pesquisa-satisfacao'>Não deixe sua voz passar despercebida! Cada resposta é uma oportunidade para nós aprendermos e crescermos juntos. Sua participação é fundamental para moldar o futuro dos nossos produtos e serviços. Não perca a chance de fazer a diferença!</p>

                </div>

                <div className='box-imagem-banner-pesquisa'>
                    <img className='imagem-banner-pesquisa' src={imagem.src} alt="" />
                </div>
            </div>

            <div className='box-form-pesquisa'>

                
                <form className="formulario_feedback" name="formulario_feedback" onSubmit={handleFeedbackFormSubmit}>

                    <h1 className='titulo-form-pesquisa'>Pesquisa</h1>
                    
                    <input type="text" value={name} onChange={handleNameChange} placeholder="Seu nome" required />
                    <input type="text" value={emailOrPhone} onChange={handleEmailOrPhoneChange} placeholder="E-mail ou telefone" required />
                    

                        <div className="rating-star">
                            <input value="5" name="rate" id="star5" type="radio"/>
                            <label title="text" htmlFor="star5"></label>
                            <input value="4" name="rate" id="star4" type="radio"/>
                            <label title="text" htmlFor="star4"></label>
                            <input value="3" name="rate" id="star3" type="radio"/>
                            <label title="text" htmlFor="star3"></label>
                            <input value="2" name="rate" id="star2" type="radio"/>
                            <label title="text" htmlFor="star2"></label>
                            <input value="1" name="rate" id="star1" type="radio"/>
                            <label title="text" htmlFor="star1"></label>
                        </div>
                    

                    <textarea name="opinion" value={opinion} onChange={handleOpinionChange} placeholder="Sua opinião..." required></textarea>

                    <div className="btn-group">
                        <button type="submit" className="btn-pesquisa-satisfacao" id="submitBtn">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
