---
title: Tracing Policies
sidebar_position: 2
description: Build policies with hooks, selectors, modes, and metadata.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Use these pages as a guided reference for designing and tuning Tetragon tracing policies.

<DocCardGrid>
  <DocCard title="Argument Types" description="Learn how policy arguments are represented and filtered." to="/docs/docs/concepts/tracing-policy/argument_types" />
  <DocCard title="Policy Example" description="Start with a complete policy example and its surrounding concepts." to="/docs/docs/concepts/tracing-policy/example" />
  <DocCard title="Hooks" description="Choose kernel and user-space hook points for observation." to="/docs/docs/concepts/tracing-policy/hooks" />
  <DocCard title="Kubernetes Filtering" description="Filter policy activity using Kubernetes identity and workload context." to="/docs/docs/concepts/tracing-policy/k8s-filtering" />
  <DocCard title="Policy Mode" description="Select the operating mode for a tracing policy." to="/docs/docs/concepts/tracing-policy/mode" />
  <DocCard title="Policy Options" description="Review options that control policy behavior and output." to="/docs/docs/concepts/tracing-policy/options" />
  <DocCard title="Selectors" description="Filter events and attach actions with selectors." to="/docs/docs/concepts/tracing-policy/selectors" />
  <DocCard title="Tags" description="Use tags to organize and identify policy content." to="/docs/docs/concepts/tracing-policy/tags" />
</DocCardGrid>
