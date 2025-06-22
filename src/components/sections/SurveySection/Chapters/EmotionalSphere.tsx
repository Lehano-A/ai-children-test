import Chapter from './Chapter'
import Fieldset from '../../../ui/Fieldset/Fieldset'

function EmotionalSphere() {
  return (
    <Chapter title='Раздел 1. Эмоциональная сфера' gap={{ chapter: 's' }}>
      <Fieldset legend='Ребенок часто выражает радость и удовольствие:' name='q1_1' />

      <Fieldset legend='Ребенок часто выражает радость и удовольствие:' name='q1_2' />

      <Fieldset legend='Ребенок часто грустит или плачет без видимой причины:' name='q1_3' />

      <Fieldset legend='Ребенок часто грустит или плачет без видимой причины:' name='q1_4' />
      <Fieldset
        legend='Ребенок легко раздражается или злится, когда что-то идет не по его плану:'
        name='q1_5'
      />
      <Fieldset
        legend='Ребенок активно выражает любопытство и интерес к окружающему миру:'
        name='q1_6'
      />
      <Fieldset
        legend='Ребенок стесняется или избегает контакта с незнакомыми людьми:'
        name='q1_7'
      />
      <Fieldset
        legend='Как часто ребенок выражает сочувствие или заботу по отношению к другим:'
        name='q1_8'
      />
      <Fieldset legend='Ребенок склонен к резким перепадам настроения в течение дня:' name='q1_9' />
      <Fieldset
        legend='Ребенок демонстрирует сочувствие к другим (например, жалеет, если кто-то расстроен):'
        name='q1_10'
      />
    </Chapter>
  )
}

export default EmotionalSphere
