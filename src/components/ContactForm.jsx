import React, { useState } from 'react';

export default function FormularioContato() {
  const [carregando, setCarregando] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Manipulador para alterações nos campos
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = async event => {
    event.preventDefault();
    setCarregando(true);
    const formData = new FormData(event.target);

    formData.append('access_key', '181cd600-2d22-43e1-bd73-0aaea8788854');

    const objeto = Object.fromEntries(formData);
    const json = JSON.stringify(objeto);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());

    if (res.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setCarregando(false);
      alert('Mensagem enviada com sucesso!');
      
    }else{
      alert('Ocorreu um erro ao enviar o e-mail. Tente novamente.');  // Alerta em caso de erro
    }
  };

  return (
    <form id="form-contato" onSubmit={onSubmit}>
      <div className="row gx-3 gy-4">
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Seu Nome</label>
            <input
              name="name"
              placeholder="Nome *"
              className="form-control"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label className="form-label">Seu E-mail</label>
            <input
              name="email"
              placeholder="E-mail *"
              className="form-control"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label className="form-label">Assunto</label>
            <input
              name="subject"
              placeholder="Assunto *"
              className="form-control"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="form-label">Sua Mensagem</label>
            <textarea
              name="message"
              placeholder="Sua mensagem *"
              rows={4}
              className="form-control"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="send">
            <button
              className={`px-btn w-100 ${carregando ? 'disabled' : ''}`}
              type="submit"
            >
              {carregando ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
