import { useHistory }from 'react-router-dom';

const HouseFilter = ( {allHouses}) => {
    const countires = allHouses
    ? Array.from(new Set(allHouses.map((h)=> h.country))) : [];
    countires.unshift(null);
    const history = useHistory();

    const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`)
    }

    return ( 
        <div className="row mt-3">
        <div className="offset-mid-2 col-md-4">
            Looking for your dream house in country:
        </div>
        <div className="col-md-4 mb-3">
            <select className="form-select" onChange={{onSearchChange}}>
                {countires.map((c)=>(
                    <opton key={c} value={c}>
                        {c}
                    </opton>
                ))}

            </select>
        </div>
        </div>
     );
}
 
export default HouseFilter;