import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

describe('Greeting component',()=>{
    test('renders Hello World as text',()=>{
        //Arrange
        render(<Greeting/>)
    
        //Act
        //...nothing
        
        //Assert
        const outputText = screen.getByText('Hello World',{exact : false})
        expect(outputText).toBeInTheDocument()
    })

    test('renders Its good to see you when button is not clicked',()=>{
            //Arrange
            render(<Greeting/>)

            //Act
            //...nothing
            
            //Assert
            const outputText = screen.getByText(`It's good to see you!`,{exact : false})
            expect(outputText).toBeInTheDocument()
    })

    test('renders Changed! when button is clicked',()=>{
            //Arrange
            render(<Greeting/>)

            //Act
            const button = screen.getByRole('button')
            act(() => {
                /* fire events that update state */
                userEvent.click(button)
            });
            
            //Assert
            const outputText = screen.getByText('Changed!')
            expect(outputText).toBeInTheDocument()
    })

    test('renders Its good to see you fails when button is clicked',()=>{
            //Arrange
            render(<Greeting/>)

            //Act
            const button = screen.getByRole('button')
            act(() => {
                /* fire events that update state */
                userEvent.click(button)
            });
            
            //Assert
            const outputText = screen.queryByText('good to see you')
            expect(outputText).not.toBeInTheDocument()
    })
})
test('input box test',()=>{
    render(<Greeting/>)
    const text = screen.getByTestId('text')
    expect(text).toBeInTheDocument()
})