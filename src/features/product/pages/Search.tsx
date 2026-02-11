import { useSearchParams } from 'react-router-dom'
export const Search = () => {
const [param ]= useSearchParams()
    return (
        <div>
                Search page: { param.get('q')}
        </div>
    )
}
