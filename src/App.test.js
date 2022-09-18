import Enzyme,{shallow} from 'enzyme';
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter : new EnzymeAdapter()})


const setUp = () => shallow(<App/>)
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

test('counter display starts at 0',()=>{
   const wrapper = setUp()
   const count = findByTestAttr(wrapper,"count").text();
   expect(count).toBe("0");

})

// test('render whithoout error',()=>{
//    const wrapper = setUp();
//    const appComponent = findByTestAttr(wrapper,"component-app")
//    expect(appComponent.length).toBe(1)
// })

// test('renders increment button',()=>{
//    const wrapper = setUp()
//    const appComponent = findByTestAttr(wrapper,"increment-counter")
//    expect(appComponent.length).toBe(1)
// })

// test('renders counter display',()=>{
//    const wrapper = setUp()
//    const appComponent = findByTestAttr(wrapper,"counter-dispaly")
//    expect(appComponent.length).toBe(1)
// })



test('clicking biutton increament the counter display',()=>{

})