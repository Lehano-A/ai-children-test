import Chapter from './Chapter'
import Fieldset from '../../../common/Fieldset/Fieldset'

function SocialInteraction() {
  return (
    <Chapter title='Раздел 2. Социальное взаимодействие'>
      <Fieldset legend='Ребенок легко заводит друзей:' name='q2_1' />

      <Fieldset legend='Ребёнок инициативно присоединяется к играм других детей:' name='q2_2' />

      <Fieldset legend='Ребенок предпочитает играть один, а не с другими детьми:' name='q2_3' />

      <Fieldset
        legend='Ребёнок делится игрушками или другими вещами со сверстниками:'
        name='q2_4'
      />
      <Fieldset
        legend='Ребёнок обращается за помощью к взрослым в конфликтных ситуациях:'
        name='q2_5'
      />
      <Fieldset legend='Ребёнок проявляет эмпатию (сопереживает, утешает других):' name='q2_6' />
      <Fieldset
        legend='Ребёнок соблюдает очередность в играх или групповых занятиях:'
        name='q2_7'
      />
      <Fieldset
        legend='Ребёнок реагирует агрессивно (кричит, толкается) при общении с детьми:'
        name='q2_8'
      />
      <Fieldset legend='Ребёнок избегает зрительного контакта при общении:' name='q2_9' />
      <Fieldset legend='Ребёнок комментирует или обсуждает действия других детей:' name='q2_10' />
    </Chapter>
  )
}

export default SocialInteraction
