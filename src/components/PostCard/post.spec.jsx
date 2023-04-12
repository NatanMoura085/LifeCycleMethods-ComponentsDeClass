import { render,screen } from "@testing-library/react"
import { PostCard } from "."
import { PostCardMock } from "./mock"

const props = PostCardMock;
describe('<PostCard/>', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...props} />)
        expect(screen.getByRole('img', {name: /title 1/i})).toBeInTheDocument();

    })

})
