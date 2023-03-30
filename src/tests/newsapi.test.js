import { waitFor } from '@testing-library/react';
import { fetchNews } from '../utils/newsapi';

test('newsapi is fetching news', async () => {
    const data = await fetchNews('us');
    await waitFor(() => expect(data).toBeDefined());
    expect(data.articles.length).toBeGreaterThan(0);
});