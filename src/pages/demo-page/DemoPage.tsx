import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Paper,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { doc, onSnapshot, setDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { firestore } from 'src/modules/firebase-module/firebase.config';

export default function DemoPage() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState<string | null>(null);

  const docRef = doc(firestore, 'groceryLists', 'shared-hackathon-list');

  // Real-time listener for the grocery list document
  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
      if (snapshot.exists()) {
        setItems(snapshot.data().items || []);
      } else {
        setItems([]);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim()) {
      return;
    }

    try {
      setError(null);
      // setDoc with merge: true creates the document if it doesn't exist yet
      await setDoc(
        docRef,
        {
          items: arrayUnion(newItem.trim()),
        },
        { merge: true }
      );

      setNewItem('');
    } catch (err: any) {
      // Firebase will throw a 'permission-denied' error when our security rule fails
      if (err.code === 'permission-denied') {
        setError('Security Rule Violation: Maximum limit of 12 items reached!');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  const handleDeleteItem = async (itemToDelete: string) => {
    try {
      await setDoc(
        docRef,
        {
          items: arrayRemove(itemToDelete),
        },
        { merge: true }
      );
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  return (
    <Container
      maxWidth='sm'
      sx={{ mt: 4 }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, borderRadius: 2 }}
      >
        <Box
          display='flex'
          alignItems='center'
          gap={1}
          mb={2}
        >
          <ShoppingCartIcon color='primary' />
          <Typography
            variant='h5'
            component='h1'
            fontWeight='bold'
          >
            Hackathon Grocery List ({items.length}/12)
          </Typography>
        </Box>

        {error && (
          <Alert
            severity='error'
            sx={{ mb: 2 }}
          >
            {error}
          </Alert>
        )}

        <Box
          component='form'
          onSubmit={handleAddItem}
          display='flex'
          gap={1}
          mb={3}
        >
          <TextField
            fullWidth
            size='small'
            label='Add item (e.g., Energy Drinks)'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            disabled={items.length >= 12}
          />
          <Button
            variant='contained'
            type='submit'
            disabled={!newItem.trim()}
          >
            Add
          </Button>
        </Box>

        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => handleDeleteItem(item)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              sx={{ borderBottom: '1px solid #f0f0f0' }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
          {items.length === 0 && (
            <Typography
              variant='body2'
              color='textSecondary'
              align='center'
              sx={{ my: 2 }}
            >
              The list is empty. Add something to fuel the team!
            </Typography>
          )}
        </List>
      </Paper>
    </Container>
  );
}
