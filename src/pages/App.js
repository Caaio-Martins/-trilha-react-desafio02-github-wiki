import { useState, useEffect } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  // Carregar repositórios do Local Storage ao carregar a aplicação
  useEffect(() => {
    const savedRepos = JSON.parse(localStorage.getItem('repos'));
    if (savedRepos) {
      setRepos(savedRepos);
    }
  }, []);

  // Função para salvar repositórios no Local Storage
  const saveReposToLocalStorage = (repos) => {
    localStorage.setItem('repos', JSON.stringify(repos));
  };

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id);
        if (!isExist) {
          const newRepos = [...repos, data];
          setRepos(newRepos);
          saveReposToLocalStorage(newRepos); // Salva no Local Storage
          setCurrentRepo('');
          return;
        }
        alert('Repositório já adicionado');
      } else {
        alert('Repositório não encontrado');
      }
    } catch (error) {
      alert('Erro ao buscar repositório');
    }
  };

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter(repo => repo.id !== id);
    setRepos(updatedRepos);
    saveReposToLocalStorage(updatedRepos); // Salva no Local Storage após remoção
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => (
        <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
