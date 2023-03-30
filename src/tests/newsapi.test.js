import { waitFor } from '@testing-library/react';
import { fetchNews } from '../utils/newsapi';

test('newsapi is fetching news', async () => {
    const data = await fetchNews("US");
    await waitFor(() => { expect(data).toBeDefined() });
    await waitFor(() => { expect(data.totalArticles).toBeGreaterThan(0)})
});