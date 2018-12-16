// @flow
 import { asField, BasicText } from 'informed'
 import { LabeledInput } from 'components/Form'
 import * as React from 'react'
 import autobind from 'autobind-decorator'
 import DayPicker from 'react-day-picker'
 import moment from 'moment'
 import Popover from 'components/Popover'
 import WithToggleState from 'components/WithToggleState'

 import styles from './DatePicker.module.scss'

 type Props = {
   field: string,
   label: string,
   fieldState: { value: string },
   fieldApi: { setValue: Function }
 }

 const FORMAT = 'DD/MM/YYYY'

 @asField
 class DatePicker extends React.Component<Props> {
   @autobind
   onDayClick (toggle: Function) {
     return (day: Date, e: SyntheticEvent<any>) => {
       const { fieldApi } = this.props
       fieldApi.setValue(moment(day).format(FORMAT))
       toggle()
     }
  }

   renderInput (toggle: Function) {
     const { label } = this.props
     return (
       <LabeledInput label={label}>
         <BasicText
           {...this.props}
           onFocus={toggle}
           onClick={toggle}
           className={styles.input}
          />
       </LabeledInput>
     )
   }

   renderDayPicker (toggle: Function) {
     const { fieldState } = this.props

     return (
       <div className={styles.dayPicker}>
         <DayPicker
           onDayClick={this.onDayClick(toggle)}
           selectedDays={day => moment(day).format(FORMAT) === fieldState.value}
         />
       </div>
     )
   }

   render () {
     return (
       <WithToggleState>
        {({ isOpen, toggle }) => (
          <Popover
            attachment='top center'
            targetAttachment='bottom center'
            constraints={[]}
            toggle={toggle}
            open={isOpen}
          >
            {this.renderInput(toggle(true))}
            {this.renderDayPicker(toggle(false))}
          </Popover>
        )}
      </WithToggleState>

     )
   }
 }

 export default DatePicker
