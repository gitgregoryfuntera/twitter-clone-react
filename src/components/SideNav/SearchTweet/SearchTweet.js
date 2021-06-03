import React from 'react';
import { Input, InputContainer, Icon } from './SearchTweet.style';

const SearchTweet = () => {
    return (
        <div className="mt-2 mb-3">
            <InputContainer>
                <Icon />
                <Input placeholder="Search Twitter" type="text" />
            </InputContainer>
            
        </div>
    )
}

export default SearchTweet
