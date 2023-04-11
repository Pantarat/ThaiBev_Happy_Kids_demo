import React from 'react';
import '../styles/Filter.css';

export class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCollectionOpen: false,
            isPriceOpen: false,
            isColorOpen: false,
            isSizeOpen: false,
            selectedType: "All",
            tempminPrice: 15,
            tempmaxPrice: 30,
            minPrice: 15,
            maxPrice: 30,
            filterColor: "",
            selectedSizes: []
        }
    }

    handleTypeFilter = (e) => {
        this.setState({
            selectedType: e.target.id
        })
    }

    handleDropdownMenu = (e) => {
        var collection = this.state.isCollectionOpen;
        var price = this.state.isPriceOpen;
        var color = this.state.isColorOpen;
        var size = this.state.isSizeOpen;

        if (e.target.id === "types") collection = !collection;
        else if (e.target.id === "price") price = !price;
        else if (e.target.id === "color") color = !color;
        else if (e.target.id === "size") size = !size;

        this.setState({
            isCollectionOpen: collection,
            isPriceOpen: price,
            isColorOpen: color,
            isSizeOpen: size
        })
    }

    rangeInputChangeEventHandler = (e) => {
        var minBtn = document.getElementsByClassName('min')[0],
            maxBtn = document.getElementsByClassName('max')[0],
            minVal = parseInt(minBtn.value),
            maxVal = parseInt(maxBtn.value),
            origin = e.target.className,
            minimumRange = 2;

        if (origin === 'min' && minVal > maxVal - minimumRange) {
            minBtn.value = (maxVal - minimumRange);
        }
        if (origin === 'max' && maxVal - minimumRange < minVal) {
            maxBtn.value = (minimumRange + minVal);
        }

        minVal = parseInt(minBtn.value);
        maxVal = parseInt(maxBtn.value);

        this.setState({
            tempminPrice: minVal,
            tempmaxPrice: maxVal
        });
    }

    rangeInputUpdate = () => {
        this.setState({
            minPrice: this.state.tempminPrice,
            maxPrice: this.state.tempmaxPrice
        })
    }

    handleFilterColor = (e) => {
        this.setState({
            filterColor: e.target.id
        });
    }

    handleSizeCheckboxChange = (e) => {
        let size = e.target.id;
        this.setState(prevState => {
            const sizes = [...prevState.selectedSizes];
            const index = sizes.indexOf(size);

            if (index > -1) sizes.splice(index, 1);
            else sizes.push(size);

            return { selectedSizes: sizes };
        });
    }

    handleClearFilter = () => {
        this.setState({
            selectedType: "All",
            tempminPrice: 15,
            tempmaxPrice: 30,
            minPrice: 15,
            maxPrice: 30,
            filterColor: "",
            selectedSizes: []
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const curState = this.state;

        if (prevState.selectedType !== curState.selectedType ||
            prevState.minPrice !== curState.minPrice ||
            prevState.maxPrice !== curState.maxPrice ||
            prevState.filterColor !== curState.filterColor ||
            prevState.selectedSizes.length !== curState.selectedSizes.length)
        {
            this.props.handleFilterChange(curState.selectedType, curState.minPrice, curState.maxPrice, curState.filterColor, curState.selectedSizes);
        }
    }

    render() {
        return (
            <div className="filter">
                <h1 className="filter-header">Filter by</h1>
                <div className="filter-dropdown">
                    <div className="filter-btn-container">
                        <button id="types" className="filter-dropbtn" onClick={this.handleDropdownMenu}>Collection</button>
                        <p id="types" className="dropdown-indicator" onClick={this.handleDropdownMenu}>{this.state.isCollectionOpen ? "-" : "+"}</p>
                    </div>
                    {this.state.isCollectionOpen && (<div id="types-content" className="filter-dropdown-content">
                        <button className='filter-type-btn' id="All" onClick={this.handleTypeFilter}>All</button>
                        <button className='filter-type-btn' id="T-shirt" onClick={this.handleTypeFilter}>T shirts</button>
                        <button className='filter-type-btn' id="Bodysuit" onClick={this.handleTypeFilter}>Bodysuits</button>
                    </div>)}
                </div>

                <div className="filter-dropdown">
                    <div className="filter-btn-container">
                        <button id="price" className="filter-dropbtn" onClick={this.handleDropdownMenu}>Price</button>
                        <p id="price" className="dropdown-indicator" onClick={this.handleDropdownMenu}>{this.state.isPriceOpen ? "-" : "+"}</p>
                    </div>
                    {this.state.isPriceOpen && (
                    <div id="price-content" className="filter-dropdown-content">
                        <div className="rangeslider">
                            <input className="min" name="range_1" type="range" min="15" max="30" defaultValue="15" step="0.1" onChange={this.rangeInputChangeEventHandler} onMouseUp={this.rangeInputUpdate} />
                            <input className="max" name="range_1" type="range" min="15" max="30" defaultValue="30" step="0.1" onChange={this.rangeInputChangeEventHandler} onMouseUp={this.rangeInputUpdate} />
                            <span className="range_min light left">{ this.state.tempminPrice }</span>
                            <span className="range_max light right">{ this.state.tempmaxPrice }</span>
                        </div>
                    </div>)}
                </div>

                <div className="filter-dropdown">
                    <div className="filter-btn-container">
                        <button id="color" className="filter-dropbtn" onClick={this.handleDropdownMenu}>Color</button>
                        <p id="color" className="dropdown-indicator" onClick={this.handleDropdownMenu}>{this.state.isColorOpen ? "-" : "+"}</p>
                    </div>
                    {this.state.isColorOpen && (
                        <div id="color-content" className="filter-dropdown-content">
                            <button type="button" className="filter-color-btn" id="Blue" onClick={this.handleFilterColor}></button>
                            <button type="button" className="filter-color-btn" id="Cream" onClick={this.handleFilterColor}></button>
                            <button type="button" className="filter-color-btn" id="Green" onClick={this.handleFilterColor}></button>
                            <button type="button" className="filter-color-btn" id="Light-Pink" onClick={this.handleFilterColor}></button>
                            <button type="button" className="filter-color-btn" id="Peach" onClick={this.handleFilterColor}></button>
                            <button type="button" className="filter-color-btn" id="Terracota" onClick={this.handleFilterColor}></button>
                            <button type="button" className="filter-color-btn" id="White" onClick={this.handleFilterColor}></button>
                        </div>)}
                </div>

                <div className="filter-dropdown">
                    <div className="filter-btn-container">
                        <button id="size" className="filter-dropbtn" onClick={this.handleDropdownMenu}>Size</button>
                        <p id="size" className="dropdown-indicator" onClick={this.handleDropdownMenu}>{this.state.isSizeOpen ? "-" : "+"}</p>
                    </div>
                    {this.state.isSizeOpen && (
                        <div id="size-content" className="filter-dropdown-content">
                            <div className="filter-size-container">
                                <input type="checkbox" id="0-3 months" onChange={this.handleSizeCheckboxChange} checked={this.state.selectedSizes.includes("0-3 months")} />
                                <label className="filter-size-text">0-3 months</label>
                            </div>
                            <div className="filter-size-container">
                                <input type="checkbox" id="3-6 months" onChange={this.handleSizeCheckboxChange} checked={this.state.selectedSizes.includes("3-6 months")} />
                                <label className="filter-size-text">3-6 months</label>
                            </div>
                            <div className="filter-size-container">
                                <input type="checkbox" id="6-12 months" onChange={this.handleSizeCheckboxChange} checked={this.state.selectedSizes.includes("6-12 months")} />
                                <label className="filter-size-text">6-12 months</label>
                            </div>
                            <div className="filter-size-container">
                                <input type="checkbox" id="12-18 months" onChange={this.handleSizeCheckboxChange} checked={this.state.selectedSizes.includes("12-18 months")} />
                                <label className="filter-size-text">12-18 months</label>
                            </div>
                            <div className="filter-size-container">
                                <input type="checkbox" id="18-24 months" onChange={this.handleSizeCheckboxChange} checked={this.state.selectedSizes.includes("18-24 months")} />
                                <label className="filter-size-text">18-24 months</label>
                            </div>
                            <div className="filter-size-container">
                                <input type="checkbox" id="2 years" onChange={this.handleSizeCheckboxChange} checked={this.state.selectedSizes.includes("2 years")} />
                                <label className="filter-size-text">2 years</label>
                            </div>
                            <div className="filter-size-container">
                                <input type="checkbox" id="3 years" onChange={this.handleSizeCheckboxChange} checked={this.state.selectedSizes.includes("3 years")} />
                                <label className="filter-size-text">3 years</label>
                            </div>
                        </div>)}
                </div>
                <button className="filter-clear" onClick={this.handleClearFilter}>Clear Filters <strong className="filter-clear-x">&times;</strong></button>
            </div>
        );
    }
}