import  {useParams} from 'react-router-dom';
import SearchResultsRow from './search-results-row';


const SearchResults = ( {allHouses} ) => {

    const { country }= useParams();
    const filteredHouses = allHouses.filter((h)=>h.country === country);
    return (
        <div className='mt-2'>
            <h4>Results for country {country}:</h4>
            <table className='table-row-hover'>
                <tbody>
                    {filteredHouses.map((h) => (
                        <SearchResultsRow key={h.id} house={h}/>
                    ))}
                </tbody>
            </table>
        </div>
      );
}
 
export default SearchResults;