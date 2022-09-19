import Enzyme,{shallow} from 'enzyme';
import  EnzymeAdapter  from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({adapter : new EnzymeAdapter()})


const setUp = () => shallow(<App/>)
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)


test('render whithoout error',()=>{
   const wrapper = setUp();
   const appComponent = findByTestAttr(wrapper,"component-app")
   expect(appComponent.length).toBe(1)
})

test('renders increment button',()=>{
   const wrapper = setUp()
   const appComponent = findByTestAttr(wrapper,"increment-counter")
   expect(appComponent.length).toBe(1)
})

test('renders counter display',()=>{
   const wrapper = setUp()
   const appComponent = findByTestAttr(wrapper,"counter-dispaly")
   expect(appComponent.length).toBe(1)
})

test('counter display starts at 0',()=>{
   const wrapper = setUp()
   const count = findByTestAttr(wrapper,"count").text();
   expect(count).toBe("0");
})

test('clicking biutton increament the counter display',()=>{
   const wrapper = setUp();

   //find the button
   const button = findByTestAttr(wrapper, "increment-counter");

   //click the button
   button.simulate('click');  

   //find the display and test the number
   const count = findByTestAttr(wrapper,"count").text();
   expect(count).toBe("1")

})


describe(" decrement button", () =>{
   test('clicking button decrement the counter dispaly', ()=>{
      //finfd the wrapper
      const wrapper = setUp();
      //find the display and test the number
      const count = findByTestAttr(wrapper,"count").text();
   
      //first find and increment button and increase the count
      const incrementButton = findByTestAttr(wrapper,"increment-counter");
      incrementButton.simulate('click');

      //first find and decrement button and decrease the count
      const decreaseButton = findByTestAttr(wrapper,"decrement-counter");
      decreaseButton.simulate('click');
   
      // const count = findByTestAttr(wrapper,"count").text();
      expect(count).toBe("0")
   })
})


describe("error when count goes below 0", () =>{
   test("error does not show when not needed ", () =>{
      const wrapper = setUp();

      const errDiv = findByTestAttr(wrapper,"err-message");
      
      // if(count < 0){
         const errorHasHiddenClass = errDiv.hasClass("hidden")
         expect(errorHasHiddenClass).toBe(true);
   });

   describe ("counter is 0 and decrement is clicked", () =>{
      let wrapper;
      beforeEach (() =>{
         wrapper = setUp();

         const decreaseButton = findByTestAttr(wrapper,"decrement-counter");
         decreaseButton.simulate('click');
      });

      test("error shows", ()=>{
         const errDiv = findByTestAttr(wrapper,"err-message");
         const errorHasHiddenClass = errDiv.hasClass("hidden");
         expect(errorHasHiddenClass).toBe(false);
      });

      test ("counter still dispaly 0", () =>{
         const count = findByTestAttr(wrapper,"count").text();
         expect(count).toBe("0");
      });

      test("clear the error when click on increnmet", () =>{
         const increaseButton = findByTestAttr(wrapper,"increment-counter");
         increaseButton.simulate('click');

         const errDiv = findByTestAttr(wrapper,"err-message");
         const errorHasHiddenClass = errDiv.hasClass("hidden");
         expect(errorHasHiddenClass).toBe(true);
      })

   })


})
