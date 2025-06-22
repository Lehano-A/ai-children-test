import Chapter from './Chapter'
import Input from '../../../ui/Input/Input'
import Fieldset from '../../../ui/Fieldset/Fieldset'

function CommonQuestions() {
  return (
    <Chapter title='Раздел 5. Общие вопросы'>
      <Fieldset
        legend='Как Вы оцениваете общее эмоциональное состояние вашего ребенка?'
        name='emotionalState'
        radio={[
          ['Отличное', '5'],
          ['Хорошее', '4'],
          ['Удовлетворительное', '3'],
          ['Неудовлетворительное', '2'],
          ['Очень плохое', '1'],
        ]}
        breakpoints={{ s: 'column', m: 'column', xl: 'row' }}
      />

      <Input
        label='Есть ли у Вашего ребенка какие-либо особенности развития или поведения, о которых Вы хотели бы сообщить дополнительно?'
        height='xxl'
        type='textarea'
        name='q5_1'
      />
      <Input
        label='Какие, на Ваш взгляд, сильные стороны и таланты есть у Вашего ребенка?'
        height='xl'
        type='textarea'
        name='q5_2'
      />
      <Input
        label='Какие, на Ваш взгляд, области требуют особого внимания и развития у Вашего ребенка?'
        height='xxl'
        type='textarea'
        name='q5_3'
      />
      <Input
        label='Обращались ли Вы ранее к специалистам (психологу, неврологу, логопеду) по поводу развития или поведения Вашего ребенка?'
        height='xxl'
        type='textarea'
        name='q5_4'
      />

      <Input
        label='Какие занятия или игры больше всего увлекают вашего ребёнка?'
        height='xxl'
        type='textarea'
        name='q5_5'
      />

      <Input
        label='Какие навыки (речевые, двигательные, социальные) даются ему легче всего?'
        height='xxl'
        type='textarea'
        name='q5_6'
      />
      <Input
        label='Как ваш ребёнок относится к режиму дня (сон, еда, занятия)?'
        height='xxl'
        type='textarea'
        name='q5_7'
      />
      <Input
        label='Есть ли у него любимые/нелюбимые продукты питания?'
        height='xxl'
        type='textarea'
        name='q5_8'
      />
      <Input
        label='Какие книги, мультфильмы или игры нравятся вашему ребёнку?'
        height='xxl'
        type='textarea'
        name='q5_9'
      />
      <Input
        label='К каким видам творчества ребенок проявляет интерес (рисование, лепка, музыка и т. д.)?'
        height='xxl'
        type='textarea'
        name='q5_10'
      />
    </Chapter>
  )
}

export default CommonQuestions
