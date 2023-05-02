import React from 'react'
import { t } from 'i18next';
import Button from '@mui/material/Button';
import { useState } from 'react'

function SortButtons(props) {

  

  function sorteeriAZ() {
    props.products.sort((a, b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice())
  }

  function sorteeriZA() {
    props.products.sort((a, b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice())
  }

  function sorteeriKasvav() {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice())
  }

  function sorteeriKahanev() {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice())
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