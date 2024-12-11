import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Directory from './Directory';
import { File, Copy, Delete, Rename, Folder } from '../Assets/icons';
import '@testing-library/jest-dom';

vi.mock('../Assets/icons', () => ({
  File: () => <svg data-testid="file-icon" />,
  Copy: () => <svg data-testid="copy-icon" />,
  Delete: () => <svg data-testid="delete-icon" />,
  Rename: () => <svg data-testid="rename-icon" />,
  Folder: () => <svg data-testid="folder-icon" />,
}));

describe('Directory Component', () => {
  it('renders a file item with actions', () => {
    const mockFile = { type: 'file', name: 'example.txt' };

    render(<Directory files={mockFile} />);

    // Verify the file name and icon are rendered
    expect(screen.getByText('example.txt')).toBeInTheDocument();
    expect(screen.getByTestId('file-icon')).toBeInTheDocument();

    // Simulate right-click to open actions menu
    const fileButton = screen.getByText('example.txt');
    fireEvent.contextMenu(fileButton);

    // Verify the actions are rendered
    expect(screen.getByTestId('copy-icon')).toBeInTheDocument();
    expect(screen.getByTestId('delete-icon')).toBeInTheDocument();
    expect(screen.getByTestId('rename-icon')).toBeInTheDocument();

    // Mock alert
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

    // Verify click actions
    const copyButton = screen.getByTestId('copy-icon');
    fireEvent.click(copyButton);
    expect(alertMock).toHaveBeenCalledWith('copied success!');

    const deleteButton = screen.getByTestId('delete-icon');
    fireEvent.click(deleteButton);
    expect(alertMock).toHaveBeenCalledWith('deleted success!');

    const renameButton = screen.getByTestId('rename-icon');
    fireEvent.click(renameButton);
    expect(alertMock).toHaveBeenCalledWith('renamed success!');

    alertMock.mockRestore();
  });

  it('renders a folder and toggles its state', () => {
    const mockFolder = {
      type: 'folder',
      name: 'Documents',
      data: [
        { type: 'file', name: 'example.txt' },
      ],
    };

    render(<Directory files={mockFolder} />);

    // Verify the folder name and icon are rendered
    expect(screen.getByText('Documents')).toBeInTheDocument();
    expect(screen.getByTestId('folder-icon')).toBeInTheDocument();

    // Simulate folder toggle
    const folderButton = screen.getByText('Documents');
    fireEvent.click(folderButton);

    // Verify nested file is rendered
    expect(screen.getByText('example.txt')).toBeInTheDocument();
  });
});
