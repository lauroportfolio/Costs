import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {

    const navigate = useNavigate()

    const handleBack = () => {
        // Ação para voltar à página anterior
        navigate(-1);
    };

    function createPost(project) {

        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then(resp => resp.json())
            .then((data) => {
                console.log(data)
                // redirecionando
                navigate('/projects', {state:{text: 'Projeto criado com sucesso!'}})
            })
            .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
            <button type="button" className={styles.backBtn} onClick={handleBack}>Retornar</button>
        </div>
    )
}

export default NewProject