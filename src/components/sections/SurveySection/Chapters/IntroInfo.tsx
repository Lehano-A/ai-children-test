import Chapter from './Chapter'
import Input from '../../../ui/Input/Input'
import Fieldset from '../../../ui/Fieldset/Fieldset'

function IntroInfo() {
  return (
    <Chapter title='Общая информация о ребенке' gap={{ chapter: 's', fieldset: 's' }}>
      <Input label='Имя ребенка' name='childName' />
      <Input label='Дата рождения ребенка' name='childDOB' type='date' />

      <Fieldset
        legend='Пол ребенка'
        radio={[
          ['Мужской', 'man'],
          ['Женский', 'woman'],
        ]}
        name='childGender'
      />

      <Input label='Имя родителя, заполняющего анкету' name='parentName' />
    </Chapter>
  )
}

export default IntroInfo
