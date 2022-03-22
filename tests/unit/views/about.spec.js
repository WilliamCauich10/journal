import { shallowMount } from "@vue/test-utils";
import About from "@/views/About";

describe('Pruebas en el About view', () => { 
    
     test('debe de remderizar el componente', () => { 

          const wrapper = shallowMount( About )
          expect( wrapper.html() ).toMatchSnapshot( )

     })
})