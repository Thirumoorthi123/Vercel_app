import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled.div`
    z-index: 99;
    cursor: poniter;
`;
const Path = (props) => (
    <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="2"
    {...props}
    />
);

const transition = { duration: 0.30};

export function MenuToggle({ toggle,isOpen}){
    return(
        <Button onClick={toggle}>
            <svg width="23" height="23" viewBox='0 0 23 23'>
                <Path 
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: { d: 'M 2 2.5 L20 2.5',stroke:' hsl(0,0%,18%)' },
                        open: { d: 'M 3 16.5 L17 2.5',stroke:' hsl(0,0%,18%)' },
                    }}
                    transition={transition}
                />
                <Path
                d= 'M 2 9.423 L20 9.423'
                stroke=' hsl(0,0%,18%)'
                animate={isOpen ? 'open' : 'closed'}
                initial={false}
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={transition}
                />
                <Path 
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: { d: 'M 2 16.346 L 20 16.436',stroke:' hsl(0,0%,18%)' },
                        open: { d: 'M 3 2.5 L 17 16.436',stroke:' hsl(0,0%,18%)' },
                    }}
                    transition={transition}
                />
            </svg>
        </Button>
    )
}
