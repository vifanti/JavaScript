/**
 * @jest-environment node
 */

import * as thumbnail from './shared/thumbnail';

test('Test Case 01', async () => {
    expect(await thumbnail.default("https://www.hindilearn.in/images1/html.png")).toEqual("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");
});