import React, { memo, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DeleteIcon from '@mui/icons-material/Delete'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { connect } from 'react-redux'
import { deleteProduct } from '../../store/actions/index'

const DeleteProduct = memo(({ name, id, products, onDeleteProduct }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const delMsg = () => {
    onDeleteProduct(id)
    setOpen(false)
  }

  return (
    <div>
      <Button color='inherit' onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Confirm deletion of product!'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure you want to delete the product?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            size='small'
            variant='contained'
            style={{ backgroundColor: '#3f51b5', color: 'white' }}
            onClick={delMsg}
          >
            OK
          </Button>

          <Button
            onClick={handleClose}
            variant='outlined'
            style={{ color: '#3f51b5' }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteProduct: (id) => dispatch(deleteProduct(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProduct)
