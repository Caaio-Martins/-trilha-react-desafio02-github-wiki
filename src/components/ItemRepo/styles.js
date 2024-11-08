import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background-color: #1e1e1e;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    color: #fafafa;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    }

    h3 {
        font-size: 24px;
        color: #FAFAFA;
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
        color: #FAFAFA80; /* cor suave */
        margin-bottom: 16px;
    }

    a {
        text-decoration: none;
        display: inline-block;
        padding: 8px 16px;
        margin-top: 12px;
        border-radius: 4px;
        font-weight: bold;
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    /* Estilo para o link "Ver repositório" */
    .view-repo {
        background-color: #2c2f3a;
        color: #58a6ff;
        border: 1px solid #58a6ff;
    }

    .view-repo:hover {
        background-color: #58a6ff;
        color: #fff;
    }

    /* Estilo para o link "Remover" */
    .remover {
        background-color: #ff4f4f;
        color: #fff;
        border: 1px solid #ff4f4f;
        margin-top: 12px;
    }

    .remover:hover {
        background-color: #e60000;
        border-color: #e60000;
    }

    hr {
        border: 0;
        border-top: 1px solid #FAFAFA40;
        margin: 20px 0;
    }
`
