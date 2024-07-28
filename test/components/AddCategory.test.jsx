const { render, screen } = require("@testing-library/react")
const { AddCategory } = require("../../src/components/AddCategory")


describe('Test en el componente AddCategory', () => { 
    
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>);
        screen.debug();    
     })


})