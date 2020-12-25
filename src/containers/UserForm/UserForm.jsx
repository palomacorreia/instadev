import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [showMessage, setMessage] = useState(false);

  const handleChange = (callback, value) => callback(value);

  return (
    <React.Fragment>
      <section className="post__form" data-testid="user-form">
      <div className="container">
        <div className="post__form__wrapper">
          <label>Nome</label>
          <input type="text" value={name} onChange={e => handleChange(setName, e.target.value)} placeholder="Ex: Fulano da Silva" />
          <label>Usuário</label>
          <input type="text" value={user} onChange={e => handleChange(setUser, e.target.value)} placeholder="Ex: fulano_da_silva" />
          <label>Email</label>
          <input type="email" value={email} onChange={e => handleChange(setEmail, e.target.value)} placeholder="Ex: fulado@provedor.com" />
          <label>Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
          <input type="text" value={urlImg} onChange={e => handleChange(setUrlImg, e.target.value)} placeholder="http://.." />
          <button type="button" onClick={() => setMessage(true)}>Cadastrar</button>
        </div>
      </div>
    </section>
    
    {showMessage && (
      <SuccessMessage />
    )}
    </React.Fragment>
  );
};


export default UserForm;
