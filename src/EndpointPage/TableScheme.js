import TextCell from './TextCell'
import TagCell from './TagCell'
import ToggleCell from './ToggleCell'

export const scheme = [
    { 
        headerTitle: 'Name',
        columnSize: 4,
        columnCellElement: TextCell,
        dataKey: 'name'
    },
    { 
        headerTitle: 'PII',
        columnSize: 1,
        columnCellElement: ToggleCell,
        dataKey: 'pii'
    },
    { 
        headerTitle: 'Masking',
        columnSize: 6,
        columnCellElement: ToggleCell,
        dataKey: 'masked'
    },
    { 
        headerTitle: 'Type',
        columnSize: 2,
        columnCellElement: TagCell,
        dataKey: 'type'
    }
]