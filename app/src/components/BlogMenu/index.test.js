import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import BlogMenu from './index';
import { MemoryRouter } from 'react-router-dom';
import apiCall from '../../utils/api';
import { act } from 'react-dom/test-utils';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../../utils/api');

describe('BlogMenu', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ name: 'testUser' });
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders blog menu titles when user is logged in', async () => {
    const blogMenuTitles = [
      { id: 1, title: 'Blog 1' },
      { id: 2, title: 'Blog 2' },
    ];

    useSelector.mockReturnValue('testUser');
    apiCall.mockResolvedValue({ blogs: blogMenuTitles })

    await act(async () => {
      render(
    <MemoryRouter>
      <BlogMenu />
    </MemoryRouter>);
    });

    expect(screen.getByText('Blogs')).toBeInTheDocument();

    blogMenuTitles.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  test('does not render blog menu titles when user is not logged in', () => {
    useSelector.mockReturnValue(null);

    render(
    <MemoryRouter>
      <BlogMenu />
    </MemoryRouter>);

    expect(screen.queryByText('Blogs')).not.toBeInTheDocument();
    expect(screen.queryByText('New Blog')).not.toBeInTheDocument();
  });
});