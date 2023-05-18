import React from 'react'
import { t } from 'i18next';
import Button from '@mui/material/Button';


function SortButtons(props) {

  

  function sorteeriAZ() {
    props.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    props.setFilteredProducts(props.filteredProducts.slice());
    props.setProducts(props.filteredProducts.slice(20*props.page-20,20*props.page))
  }

  function sorteeriZA() {
    props.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    props.setFilteredProducts(props.filteredProducts.slice());
    props.setProducts(props.filteredProducts.slice(20*props.page-20,20*props.page))
  }

  function sorteeriKasvav() {
    props.filteredProducts.sort((a, b) => a.price - b.price);
    props.setFilteredProducts(props.filteredProducts.slice());
    props.setProducts(props.filteredProducts.slice(20*props.page-20,20*props.page))
  }

  function sorteeriKahanev() {
    props.filteredProducts.sort((a, b) => b.price - a.price);
    props.setFilteredProducts(props.filteredProducts.slice());
    props.setProducts(props.filteredProducts.slice(20*props.page-20,20*props.page))
  }


  return (
    <div>
      <div>
        <Button variant="secondary" onClick={sorteeriAZ}>{t("sort.sorteeriAZ")}</Button>
        <Button variant="secondary" onClick={sorteeriZA}>{t("sort.sorteeriZA")}</Button>
        <Button variant="secondary" onClick={sorteeriKasvav}>{t("sort.sorteeriKasvav")}</Button>
        <Button variant="secondary" onClick={sorteeriKahanev}>{t("sort.sorteeriKahanev")}</Button>
      </div>
    </div>
  )
}

export default SortButtons
// props saab kasutada ka setProducts .props ette