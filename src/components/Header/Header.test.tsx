import {render, screen} from '@testing-library/react';
import {Header} from './Header'

describe('Header', () => {
    it('should display header with title', () => {
        render(<Header />);
        expect(screen.getByRole('heading', {name: 'Tech Talks Singapore'})).toBeInTheDocument();
    });
})