import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';


export default function QuranPdf() {
    const navigate = useNavigate();

    

    // const pdfs = (require.context('../assets/pdfs', true, /\.pdf$/)).keys().map((pdf) => pdf.split('/')[1]);
    const pdfs = (require.context('/public/assets/pdfs', true, /\.pdf$/)).keys().map((pdf) => pdf.split('/')[1]);


    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    }, false);


    pdfs.sort((a, b) => {
        return parseInt(a.split('.')[0]) - parseInt(b.split('.')[0]);
    });



    const convertToBanglaNumber = (index) => {
        let bangla = index.toString().replace(/[0-9]/g, function (w) {
            return String.fromCharCode(w.charCodeAt(0) + 2486);
        });
        return bangla;
    }




    const handlePdfClick = (pdf) => {

        const pdfLink = require(`/public/assets/pdfs/${pdf}`);
        navigate('/pdfviewer', { state: { pdfLink: pdfLink } })


    }

    // const handlePdfClose = () => {
    //     setSelectedPdf(null);
    //     setSelectedPdfLink(null);
    // }



    return (
        <div className="flex flex-col justify-items-center w-full bg-gray-50">
            <NavbarComponent />
            <Box p={10}>
                <Grid templateColumns="repeat(1, 1fr)" gap={6}>

                    {pdfs.map((pdf, index) => {

                        return (


                            <GridItem className='flex justify-between p-2 cursor-pointer' color={'#198754'} key={index} colSpan={1} bg="gray.50" p={4} border="1px" borderColor="gray.200" borderRadius="md" >

                                <Text fontSize="xl" fontWeight="semibold">{convertToBanglaNumber((pdf.split('.')[0]))}</Text>
                                <Text fontSize="lg" fontWeight="semibold">{pdf.split('.')[1]}</Text>
                                <span onClick={() => handlePdfClick(pdfs[index])}  ><FiPlay size={25} /></span>


                            </GridItem>
                        )
                    })}
                </Grid>

            </Box>
            
        </div>
    
            




    )
}
