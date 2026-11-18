import {rules, createComparison} from "../lib/compare.js";

export function initSearching(searchField) {
    const compare = createComparison(
        [rules.skipEmptyTargetValues],
        [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
    );

    return (data, state, action) => {
        // Применяем компаратор
        return data.filter(item => compare(item, state));
    }
}
