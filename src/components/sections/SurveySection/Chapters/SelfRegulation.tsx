import Chapter from './Chapter'
import Fieldset from '../../../common/Fieldset/Fieldset'

function SelfRegulation() {
  return (
    <Chapter title='Раздел 3. Саморегуляция и поведение'>
      <Fieldset legend='Ребенок умеет следовать правилам и инструкциям:' name='q3_1' />

      <Fieldset legend='Ребенок справляется с разочарованием, не впадая в истерику:' name='q3_2' />

      <Fieldset legend='Ребенку трудно контролировать свои импульсы:' name='q3_3' />

      <Fieldset
        legend='Ребёнок отвлекается во время выполнения заданий и теряет концентрацию:'
        name='q3_4'
      />

      <Fieldset
        legend='Ребёнок осознаёт последствия своих действий и корректирует поведение:'
        name='q3_5'
      />
      <Fieldset legend='Ребёнок реагирует чрезмерно эмоционально на мелкие неудачи:' name='q3_6' />
      <Fieldset
        legend='Ребёнок планирует свои действия (например, готовится к занятиям заранее):'
        name='q3_7'
      />
      <Fieldset
        legend='Ребёнок соблюдает установленные границы (например, не трогает запрещённые предметы после предупреждения):'
        name='q3_8'
      />
      <Fieldset
        legend='Ребенок перебивает других, когда они говорят:

'
        name='q3_9'
      />
      <Fieldset
        legend='Ребенок может адекватно выразить словами, что его расстроило:'
        name='q3_10'
      />
    </Chapter>
  )
}

export default SelfRegulation
