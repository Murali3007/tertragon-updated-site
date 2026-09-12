---
title: Concepts
sidebar_position: 2
description: Core ideas behind Tetragon observability and enforcement.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Learn how Tetragon models events, tracing policies, enforcement, and runtime behavior.

<DocCardGrid>
  <DocCard title="Cgroup Rate Limiting" description="Control event volume with cgroup-aware rate limiting." to="/docs/docs/concepts/cgroup-rate" />
  <DocCard title="Events" description="Understand the event model and the metadata attached to Tetragon observations." to="/docs/docs/concepts/events" />
  <DocCard title="Enforcement" description="Explore persistent and gRPC-driven enforcement policies." to="/docs/docs/concepts/enforcement" />
  <DocCard title="Runtime Hooks" description="Learn how runtime hooks connect container lifecycle events to Tetragon." to="/docs/docs/concepts/runtime-hooks" />
  <DocCard title="Tracing Policies" description="Build policies with hooks, selectors, arguments, modes, and tags." to="/docs/docs/concepts/tracing-policy" />
</DocCardGrid>
