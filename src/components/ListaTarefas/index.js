import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
  Riscado,
  ListaContainerDois,
  TarefasConcluidas,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [adcLista, setAdcLista] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = (event) => {
    event.preventDefault();
    if (novaTarefa.trim() && novaTarefa.length > 0) {
      const novaLista = [...lista, novaTarefa];
      setLista(novaLista);
      setNovaTarefa("");
    }
  };

  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
    setAdcLista([...adcLista, tarefa]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      return adicionaTarefa();
    }
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          /* onKeyPress={handleKeyPress} */
        />
        <AddTaskButton onClick={adicionaTarefa} type="submit">
          Adicionar
        </AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton
                  onClick={() => removeTarefa(tarefa)}
                  type="submit"
                >
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal />
      <ListaContainerDois>
        <ul>
          {adcLista.map((tarefa, index) => {
            return (
              <TarefasConcluidas key={index}>
                <Riscado>{tarefa} </Riscado>{" "}
                <button onClick={adicionaTarefa}>
                  <img
                    src="https://e7.pngegg.com/pngimages/44/770/png-clipart-computer-icons-done-angle-text.png"
                    alt=""
                    width="30px"
                  />
                </button>
              </TarefasConcluidas>
            );
          })}
        </ul>
      </ListaContainerDois>
    </ListaTarefasContainer>
  );
}
