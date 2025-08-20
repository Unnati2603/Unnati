/**
 * StatusBar Component
 * 
 * This component renders the status bar at the bottom of the file explorer,
 * showing information about the selected item or general status.
 */

import React from 'react';
import { FileSystemItem } from '../../../data/fileSystemData';

interface StatusBarProps {
  selectedItem: FileSystemItem | null;
}

const StatusBar: React.FC<StatusBarProps> = ({ selectedItem }) => (
  <div className="bg-gray-900 p-1 text-gray-400 text-xs border-t border-gray-700 rounded-b-lg">
    {selectedItem ? `${selectedItem.name} - ${selectedItem.type}` : 'Ready'}
  </div>
);

export default StatusBar;
