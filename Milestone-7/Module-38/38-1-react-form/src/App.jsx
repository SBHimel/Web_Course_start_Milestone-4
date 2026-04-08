
import './App.css'
import Grandpa from './Component/ContextApi/GrandPa'
import ControlField from './Component/ControlField/ControlField'
import FormAction from './Component/FormAction/FormAction'
import HookForm from './Component/HookForm/HookForm'
import ProductManagement from './Component/ProductManagement/ProductManagement'
import SimpleForm from './Component/SimpleForm/SimpleForm'
import Uncontrolled from './Component/UncontrolledField/Uncontrolled'

function App() {

  return (
    <>
      <h1>Explore React Form </h1>
      {/* <SimpleForm></SimpleForm>

      <FormAction></FormAction>

      <ControlField></ControlField>

      <Uncontrolled></Uncontrolled>

      <HookForm></HookForm> */}

      <ProductManagement></ProductManagement>

      <Grandpa></Grandpa>
    </>
  )
}

export default App
