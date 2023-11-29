import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async Component',()=>{
    test('renders post if request succeeds',async ()=>{
        window.fetch = jest.fn()
        window.fetch.mockResolvedValueOnce({
            json:async()=>[{id:'p1',title:'First Post'}]
        })
        render(<Async/>)
        const listItems = await screen.findAllByRole('listitem')
        expect(listItems).not.toHaveLength(0)
    })

    test('async test failure', async () => {
        window.fetch = jest.fn()
        window.fetch.mockRejectedValue([{id:'f1',title:'Fail Post'}]);
        render(<Async/>)
        const listItems = await screen.findAllByRole('listitem')
        expect(listItems).not.toHaveLength(0)
      });
})