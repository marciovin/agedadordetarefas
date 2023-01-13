import { ArmazenadordeHistoria, ConteinerHistorico, StatusV } from './styles'

export function History() {
  return (
    <ConteinerHistorico>
      <h1>Pré historico</h1>

      <ArmazenadordeHistoria>
        <table>
          <thead>
            <tr>
              <th>Talefa</th>
              <th>Inicio</th>
              <th>Duração</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Litter Boy</td>
              <td>Deis de 6 de Agosto de 1945</td>
              <td>43 segundos</td>
              <td>
                <StatusV statusColor="yellow">Em andamento</StatusV>
              </td>
            </tr>
            <tr>
              <td>Litter Boy</td>
              <td>Deis de 6 de Agosto de 1945</td>
              <td>43 segundos</td>
              <td>
                <StatusV statusColor="green">Concluido</StatusV>
              </td>
            </tr>
            <tr>
              <td>Litter Boy</td>
              <td>Deis de 6 de Agosto de 1945</td>
              <td>43 segundos</td>
              <td>
                <StatusV statusColor="yellow">Em andamento</StatusV>
              </td>
            </tr>
            <tr>
              <td>Litter Boy</td>
              <td>Deis de 6 de Agosto de 1945</td>
              <td>43 segundos</td>
              <td>
                <StatusV statusColor="green">Concluiu</StatusV>
              </td>
            </tr>
            <tr>
              <td>Litter Boy</td>
              <td>Deis de 6 de Agosto de 1945</td>
              <td>43 segundos</td>
              <td>
                <StatusV statusColor="green">Concluiu</StatusV>
              </td>
            </tr>
            <tr>
              <td>Litter Boy</td>
              <td>Deis de 6 de Agosto de 1945</td>
              <td>43 segundos</td>
              <td>
                <StatusV statusColor="red">interrompido</StatusV>
              </td>
            </tr>
            <tr>
              <td>Litter Boy</td>
              <td>Deis de 6 de Agosto de 1945</td>
              <td>43 segundos</td>
              <td>
                <StatusV statusColor="red">interrompido</StatusV>
              </td>
            </tr>
          </tbody>
        </table>
      </ArmazenadordeHistoria>
    </ConteinerHistorico>
  )
}
