import { IProps } from '@interfaces/component';
import getYear from 'date-fns/getYear';

import styled from 'styled-components';

const currentYear = getYear(new Date());
export default function Copyright() {
    return (
        <CopyrightWrapper>
            Copyright © {currentYear} WJY
        </CopyrightWrapper>
    );
}

const CopyrightWrapper = styled.div`
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    color: #333;
    z-index: 1;
` 