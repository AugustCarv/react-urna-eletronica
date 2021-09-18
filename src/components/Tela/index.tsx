import React from "react";
import { candidatos } from "../../utils";

interface Candidato {
    imagem: string;
    numero: number;
}

export function Tela () {



    return(
        <Container>
            <ListaCandidatos>
                {candidatos.map((candidato: Candidato) => {
                    return
                })}
            </ListaCandidatos>
        </Container>
    )
}