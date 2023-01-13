import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  HomeConteiner,
  FormConteiner,
  CountdownConteiner,
  Sapateiro,
  BotãoVerde,
  TaskoVerde,
  TaskaoVerde,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Se é cego?'),
  TaskoVerde: zod.number().min(5).max(90),
})

export function Home() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const tesla = watch('tesla')
  const isSubmitDisabled = !tesla

  return (
    <HomeConteiner>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormConteiner>
          <label htmlFor="tesla">Vou trabalhar em</label>
          <TaskoVerde
            id="tesla"
            list="sugestão"
            placeholder="nome do projeto"
            {...register('tesla')}
          />

          <datalist id="sugestão">
            <option value="Geladira" />
            <option value="tsunami" />
            <option value="hihi" />
            <option value="michael jackson cantando" />
            <option value="triller ou nal" />
          </datalist>

          <label htmlFor="du">durante</label>
          <TaskaoVerde
            id="du"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={90}
            {...register('taskaoverde', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormConteiner>

        <CountdownConteiner>
          <span>0</span>
          <span>0</span>
          <Sapateiro>:</Sapateiro>
          <span>0</span>
          <span>0</span>
        </CountdownConteiner>

        <BotãoVerde disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </BotãoVerde>
      </form>
    </HomeConteiner>
  )
}
