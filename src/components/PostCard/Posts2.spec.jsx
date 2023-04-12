import { render, screen } from "@testing-library/react"
import { PostCard } from "."


const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1',
            cover: 'img/img1.png',

        },
        {
            id: 2,
            title: 'title 2',
            body: 'body 2',
            cover: 'img/img2.png',

        },
        {
            id: 3,
            title: 'title 3',
            body: 'body 3',
            cover: 'img/img3.png',

        },     
    ]

}
describe('<PostCard/>', () => {
    it('should render posts', () => {
        render(<PostCard {...props} />)
        expect(screen.queryAllByRole('heading', { name: /title/i })).toHaveLength(1)
    })

})