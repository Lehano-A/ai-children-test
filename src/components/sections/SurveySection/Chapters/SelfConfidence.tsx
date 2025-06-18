import Chapter from './Chapter'
import Fieldset from '../../../ui/Fieldset/Fieldset'

function SelfConfidence() {
  return (
    <Chapter title='Раздел 4. Самооценка и уверенность в себе'>
      <Fieldset legend='Ребенок уверен в своих силах и способностях:' name='q4_1' />

      <Fieldset legend='Ребенок боится пробовать что-то новое из-за страха ошибки:' name='q4_2' />

      <Fieldset legend='Ребенок часто сомневается в себе:' name='q4_3' />

      <Fieldset legend='Ребенок легко принимает комплименты и похвалу:' name='q4_4' />

      <Fieldset legend='Ребенок сравнивает себя с другими детьми в негативном ключе:' name='q4_5' />
      <Fieldset legend='Ребенок избегает высказывать свое мнение в группе:' name='q4_6' />
      <Fieldset legend='Ребенок уверенно выступает перед классом или другими людьми:' name='q4_7' />
      <Fieldset legend='Ребенок переживает, что его будут критиковать:' name='q4_8' />
      <Fieldset legend='Ребенок ставит перед собой цели и старается их достичь:' name='q4_9' />
      <Fieldset legend='Ребенок гордится своими достижениями:' name='q4_10' />
    </Chapter>
  )
}

export default SelfConfidence
