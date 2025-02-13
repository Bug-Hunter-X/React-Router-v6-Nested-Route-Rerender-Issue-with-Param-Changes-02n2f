# React Router v6 Nested Route Rerender Bug

This repository demonstrates a bug in React Router v6 where nested routes fail to rerender when parameters in a parent route change.  The issue is that changes in parent route parameters do not trigger re-renders in child routes, leading to stale data display.  The solution provides a way to fix this issue.

## Bug Description

When navigating between routes with different parent parameters, the nested route components do not re-render, showing outdated data.  This is a common issue that can lead to incorrect application behavior.

## Solution

The solution involves using the `useParams` hook within the nested routes to access and utilize the parent route parameters, forcing a rerender when those parameters change.
